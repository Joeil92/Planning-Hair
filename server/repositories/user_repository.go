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

func (r *userRepository) GetByEmail(c context.Context, email string) (*models.User, error) {
	var queryStr string = `SELECT * FROM user WHERE email = ?`
	var users []models.User

	rows, err := r.db.Query(queryStr, email)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var user models.User
		if err := rows.Scan(&user.Id, &user.Email, &user.Password, &user.Firstname, &user.Lastname, &user.Role, &user.Created_at); err != nil {
			fmt.Println("Error scanning row:", err)
			return nil, err
		}
		users = append(users, user)
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error after scanning rows:", err)
		return nil, err
	}

	return &users[0], nil
}
