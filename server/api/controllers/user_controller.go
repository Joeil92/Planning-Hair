package controllers

import (
	"net/http"

	"github.com/Joeil92/Planning-Hair/models"
	"github.com/gin-gonic/gin"
)

type UserController struct {
	userUseCase models.UserUsecase
}

func (uc *UserController) Create(c *gin.Context) {
	var request models.User

	if err := c.ShouldBind(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{Message: err.Error()})
		return
	}

	_, err := uc.userUseCase.GetByEmail(c, request.Email)
	if err == nil {
		c.JSON(http.StatusConflict, models.ErrorResponse{Message: "User already exists with the given email"})
	}

	c.JSON(http.StatusOK, models.SuccessResponse{Message: "ok"})
}
