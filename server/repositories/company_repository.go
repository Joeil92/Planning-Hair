package repositories

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
