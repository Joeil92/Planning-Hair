package models

type Company struct {
	Id          int
	Name        string `form:"name" json:"name" binding:"required,name"`
	Description string `form:"description" json:"description"`
	Created_At  string `form:"created_at" json:"created_at" binding:"required"`
}

type CompanyUsecase interface {
}

type CompanyRepository interface {
}
