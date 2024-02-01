package models

import "github.com/golang-jwt/jwt"

type JwtCustomClaims struct {
	Id        string `json:"id"`
	Email     string `json:"email"`
	Firstname string `json:"firstname"`
	jwt.StandardClaims
}
