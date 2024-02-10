package models

import "context"

type Category struct {
	Id          int64   `form:"id" json:"id"`
	Name        string  `form:"name" json:"name" binding:"required"`
	Description *string `form:"description" json:"description"`
	Created_at  string
}

type CategoryUsecase interface {
	Create(c context.Context, Category *Category) (int64, error)
	FindAll(c context.Context) ([]Category, error)
}

type CategoryRepository interface {
	Create(c context.Context, Category *Category) (int64, error)
	FindAll(c context.Context) ([]Category, error)
}
