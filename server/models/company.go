package models

import "context"

type Company struct {
	Id          int
	Name        string `form:"name" json:"name" binding:"required,name"`
	Description string `form:"description" json:"description"`
	Created_At  string `form:"created_at" json:"created_at" binding:"required"`
}

type CompanyUsecase interface {
	GetByEmail(c context.Context, email string) (Company, error)
	Create(c context.Context, Company *Company) error
}

type CompanyRepository interface {
	GetByEmail(c context.Context, email string) (Company, error)
	Create(c context.Context, Company *Company) error
}
