package models

import "github.com/golang-jwt/jwt"

type JwtCustomClaims struct {
	Email string `json:"email"`
	Id    string `json:"id"`
	jwt.StandardClaims
}
