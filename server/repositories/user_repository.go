package repositories

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/Joeil92/Planning-Hair/models"
)

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) models.UserRepository {
	return &userRepository{db: db}
}

func (r *userRepository) Create(c context.Context, user *models.User) (int64, error) {
	var query string = `INSERT INTO user(email, password, firstname, lastname, role) VALUES(?, ?, ?, ?, ?)`

	insert, err := r.db.Exec(query, user.Email, user.Password, user.Firstname, user.Lastname, user.Role)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return 0, err
	}

	lastInsertId, err := insert.LastInsertId()
	if err != nil {
		fmt.Println("Error getting last insert ID:", err)
		return 0, err
	}

	return lastInsertId, nil
}

func (r *userRepository) GetByEmail(c context.Context, email string) (models.User, error) {
	var queryStr string = `SELECT * FROM user WHERE email = ?`
	var user models.User

	rows, err := r.db.Query(queryStr, email)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return user, err
	}
	defer rows.Close()

	if rows.Next() {
		err = rows.Scan(&user.Id, &user.Email, &user.Password, &user.Firstname, &user.Lastname, &user.CreatedAt)
		if err != nil {
			return user, err
		}
	} else {
		return user, sql.ErrNoRows
	}

	return user, nil
}
