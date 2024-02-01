package services

import (
	"time"

	"github.com/Joeil92/Planning-Hair/models"
	"github.com/golang-jwt/jwt"
)

func CreateAccessToken(user *models.User, secret string) (accessToken string, err error) {
	exp := time.Now().Add(time.Hour * time.Duration(3600)).Unix()
	claims := &models.JwtCustomClaims{
		Id:        user.Id,
		Email:     user.Email,
		Firstname: user.Firstname,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: exp,
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	t, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", err
	}

	return t, err
}
