package models

import "context"

type Category struct {
	Id          string  `form:"id" json:"id"`
	Name        string  `form:"name" json:"name" binding:"required"`
	Description *string `form:"description" json:"description"`
	CreatedAt   string
}

type CategoryUsecase interface {
	Create(c context.Context, Category *Category) error
	FindAll(c context.Context) ([]Category, error)
}

type CategoryRepository interface {
	Create(c context.Context, Category *Category) error
	FindAll(c context.Context) ([]Category, error)
}
