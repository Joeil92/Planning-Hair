package models

import "context"

type User struct {
	Id        int
	Email     string `form:"user" json:"email" binding:"required,email"`
	Password  string `form:"user" json:"password" binding:"required"`
	Firstname string `form:"firstname" json:"firstname" binding:"required"`
	Lastname  string `form:"lastname" json:"lastname" binding:"required"`
}

type UserUsecase interface {
	GetByEmail(c context.Context, email string) (User, error)
}

type UserRepository interface {
	GetByEmail(c context.Context, email string) (User, error)
}
