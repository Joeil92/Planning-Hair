package repository

import (
	"database/sql"

	"github.com/Joeil92/Planning-Hair/models"
)

type CompanyRepository struct {
	db *sql.DB
}

func NewCompanyRepository(db *sql.DB) models.CompanyRepository {
	return &userRepository{db: db}
}

func (r *CompanyRepository) Create() {

}
