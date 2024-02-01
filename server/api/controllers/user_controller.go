package controllers

import (
	"net/http"

	"github.com/Joeil92/Planning-Hair/config"
	"github.com/Joeil92/Planning-Hair/models"
	"github.com/Joeil92/Planning-Hair/services"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type UserController struct {
	UserUseCase models.UserUsecase
}

func (uc *UserController) Create(c *gin.Context) {
	var request models.User

	if err := c.ShouldBind(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{Message: err.Error()})
		return
	}

	_, err := uc.UserUseCase.GetByEmail(c, request.Email)
	if err == nil {
		c.JSON(http.StatusConflict, models.ErrorResponse{Message: "User already exists with the given email"})
		return
	}

	encryptedPassword, err := bcrypt.GenerateFromPassword(
		[]byte(request.Password),
		bcrypt.DefaultCost,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
		return
	}

	request.Password = string(encryptedPassword)

	user := models.User{
		Email:     request.Email,
		Password:  request.Password,
		Firstname: request.Firstname,
		Lastname:  request.Lastname,
		Role:      request.Role,
	}

	lastInsertId, err := uc.UserUseCase.Create(c, &user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
		return
	}

	user.Id = lastInsertId

	accessToken, err := services.CreateAccessToken(&user, config.JWT_SECRET)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, accessToken)
}
