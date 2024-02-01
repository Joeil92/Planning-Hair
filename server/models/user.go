package models

import "context"

type User struct {
	Id        int64  `json:"id"`
	Email     string `form:"email" json:"email" binding:"required,email"`
	Password  string `form:"password" json:"password" binding:"required"`
	Firstname string `form:"firstname" json:"firstname" binding:"required"`
	Lastname  string `form:"lastname" json:"lastname" binding:"required"`
	Role      string `form:"role" json:"role" binding:"required"`
	CreatedAt string
}

type UserUsecase interface {
	GetByEmail(c context.Context, email string) (User, error)
	Create(c context.Context, User *User) (int64, error)
}

type UserRepository interface {
	GetByEmail(c context.Context, email string) (User, error)
	Create(c context.Context, User *User) (int64, error)
}
