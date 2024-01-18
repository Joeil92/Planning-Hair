package repository

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/Joeil92/Planning-Hair/models"
)

type UserRepository struct {
	database *sql.DB
}

func (repo *UserRepository) Create() {

}

func (repo *UserRepository) GetByEmail(c context.Context, email string) (models.User, error) {
	var queryStr string = `SELECT * FROM user WHERE email = ?`
	var user models.User

	rows, err := repo.database.Query(queryStr, email)
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
