package controllers

import (
	"net/http"

	"github.com/Joeil92/Planning-Hair/models"
	"github.com/gin-gonic/gin"
)

type CompanyController struct {
	CompanyUseCase models.CompanyUsecase
}

func (uc *CompanyController) Create(c *gin.Context) {
	var request models.Company

	if err := c.ShouldBind(&request); err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{Message: err.Error()})
		return
	}

	company := models.Company{
		Name:                                   request.Name,
		Description:                            request.Description,
		Address:                                request.Address,
		Working_days:                           request.Working_days,
		Category:                               request.Category,
		Working_hour_start_morning_monday:      request.Working_hour_start_morning_monday,
		Working_hour_end_morning_monday:        request.Working_hour_end_morning_monday,
		Working_hour_start_afternoon_monday:    request.Working_hour_start_afternoon_monday,
		Working_hour_end_afternoon_monday:      request.Working_hour_end_afternoon_monday,
		Working_hour_start_morning_tuesday:     request.Working_hour_start_morning_tuesday,
		Working_hour_end_morning_tuesday:       request.Working_hour_end_morning_tuesday,
		Working_hour_start_afternoon_tuesday:   request.Working_hour_start_afternoon_tuesday,
		Working_hour_end_afternoon_tuesday:     request.Working_hour_end_afternoon_tuesday,
		Working_hour_start_morning_wednesday:   request.Working_hour_start_morning_wednesday,
		Working_hour_end_morning_wednesday:     request.Working_hour_end_morning_wednesday,
		Working_hour_start_afternoon_wednesday: request.Working_hour_start_afternoon_wednesday,
		Working_hour_end_afternoon_wednesday:   request.Working_hour_end_afternoon_wednesday,
		Working_hour_start_morning_thursday:    request.Working_hour_start_morning_thursday,
		Working_hour_end_morning_thursday:      request.Working_hour_end_morning_thursday,
		Working_hour_start_afternoon_thursday:  request.Working_hour_start_afternoon_thursday,
		Working_hour_end_afternoon_thursday:    request.Working_hour_end_afternoon_thursday,
		Working_hour_start_morning_friday:      request.Working_hour_start_morning_friday,
		Working_hour_end_morning_friday:        request.Working_hour_end_morning_friday,
		Working_hour_start_afternoon_friday:    request.Working_hour_start_afternoon_friday,
		Working_hour_end_afternoon_friday:      request.Working_hour_end_afternoon_friday,
		Working_hour_start_morning_saturday:    request.Working_hour_start_morning_saturday,
		Working_hour_end_morning_saturday:      request.Working_hour_end_morning_saturday,
		Working_hour_start_afternoon_saturday:  request.Working_hour_start_afternoon_saturday,
		Working_hour_end_afternoon_saturday:    request.Working_hour_end_afternoon_saturday,
	}

	lastInsertId, err := uc.CompanyUseCase.Create(c, &company)
	if err != nil {
		c.JSON(http.StatusInternalServerError, models.ErrorResponse{Message: err.Error()})
		return
	}

	company.Id = lastInsertId

	c.JSON(http.StatusOK, models.SuccessResponse{Message: "Company has been successfully created", Data: company})
}
