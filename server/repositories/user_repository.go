package repository

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

func (r *userRepository) Create() {

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

	err = rows.Scan(&user.Id, &user.Email, &user.Password, &user.Firstname, &user.Lastname)
	if err != nil {
		return user, err
	}

	return user, nil
}
