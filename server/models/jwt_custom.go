package models

import "github.com/golang-jwt/jwt"

type JwtCustomClaims struct {
	Id        int64  `json:"id"`
	Email     string `json:"email"`
	Firstname string `json:"firstname"`
	jwt.StandardClaims
}
