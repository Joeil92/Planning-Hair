package controllers

import (
	"net/http"

	"github.com/Joeil92/Planning-Hair/models"
	"github.com/Joeil92/Planning-Hair/services"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type AuthController struct {
	UserUsecase models.UserUsecase
}

func (ac *AuthController) Auth(c *gin.Context) {
	var request models.AuthRequest

	err := c.ShouldBind(&request)
	if err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{Message: err.Error()})
		return
	}

	user, err := ac.UserUsecase.GetByEmail(c, request.Email)
	if err != nil {
		c.JSON(http.StatusNotFound, models.ErrorResponse{Message: "User not found with the given email"})
		return
	}

	if bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(request.Password)) != nil {
		c.JSON(http.StatusUnauthorized, models.ErrorResponse{Message: "Invalid credentials"})
		return
	}

	accessToken, err := services.CreateAccessToken(&user, "kfjkvnklnvjke")
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, accessToken)
}
