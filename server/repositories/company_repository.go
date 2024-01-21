package repository

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/Joeil92/Planning-Hair/models"
)

type CompanyRepository struct {
	db *sql.DB
}

func NewCompanyRepository(db *sql.DB) models.CompanyRepository {
	return &CompanyRepository{db: db}
}

func (r *CompanyRepository) Create(c context.Context, company *models.Company) error {
	var queryStr string = `INSERT INTO company(id, name, description, createdat) VALUES(?, ?, ?, ?)`

	rows, err := r.db.Query(queryStr, company.Id, company.Name, company.Description, company.Created_At)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return err
	}
	defer rows.Close()

	return nil
}

func (r *CompanyRepository) GetByEmail(c context.Context, email string) (models.Company, error) {
	var queryStr string = `SELECT * FROM company WHERE email = ?`
	var company models.Company

	rows, err := r.db.Query(queryStr, email)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return company, err
	}
	defer rows.Close()

	if rows.Next() {
		err = rows.Scan(&company.Id, &company.Name, &company.Description, &company.Created_At)
		if err != nil {
			return company, err
		}
	} else {
		return company, sql.ErrNoRows
	}

	return company, nil
}
