package models

import (
	"context"
)

type Company struct {
	Id                                     int64
	Name                                   string   `form:"name" json:"name" binding:"required"`
	Description                            string   `form:"description" json:"description"`
	Address                                string   `form:"address" json:"address" binding:"required"`
	Working_days                           []string `form:"working_days" json:"working_days" binding:"required"`
	Category                               int64    `form:"category" json:"category" binding:"required"`
	Working_hour_start_morning_monday      string   `form:"working_hour_start_morning_monday" json:"working_hour_start_morning_monday"`
	Working_hour_end_morning_monday        string   `form:"working_hour_end_morning_monday" json:"working_hour_end_morning_monday"`
	Working_hour_start_afternoon_monday    string   `form:"working_hour_start_afternoon_monday" json:"working_hour_start_afternoon_monday"`
	Working_hour_end_afternoon_monday      string   `form:"working_hour_end_afternoon_monday" json:"working_hour_end_afternoon_monday"`
	Working_hour_start_morning_tuesday     string   `form:"working_hour_start_morning_tuesday" json:"working_hour_start_morning_tuesday"`
	Working_hour_end_morning_tuesday       string   `form:"working_hour_end_morning_tuesday" json:"working_hour_end_morning_tuesday"`
	Working_hour_start_afternoon_tuesday   string   `form:"working_hour_start_afternoon_tuesday" json:"working_hour_start_afternoon_tuesday"`
	Working_hour_end_afternoon_tuesday     string   `form:"working_hour_end_afternoon_tuesday" json:"working_hour_end_afternoon_tuesday"`
	Working_hour_start_morning_wednesday   string   `form:"working_hour_start_morning_wednesday" json:"working_hour_start_morning_wednesday"`
	Working_hour_end_morning_wednesday     string   `form:"working_hour_end_morning_wednesday" json:"working_hour_end_end_morning_wednesday"`
	Working_hour_start_afternoon_wednesday string   `form:"working_hour_start_afternoon_wednesday" json:"working_hour_start_afternoon_wednesday"`
	Working_hour_end_afternoon_wednesday   string   `form:"working_hour_end_afternoon_wednesday" json:"working_hour_end_afternoon_wednesday"`
	Working_hour_start_morning_thursday    string   `form:"working_hour_start_morning_thursday" json:"working_hour_start_morning_thursday"`
	Working_hour_end_morning_thursday      string   `form:"working_hour_end_morning_thursday" json:"working_hour_end_end_morning_thursday"`
	Working_hour_start_afternoon_thursday  string   `form:"working_hour_start_afternoon_thursday" json:"working_hour_start_afternoon_thursday"`
	Working_hour_end_afternoon_thursday    string   `form:"working_hour_end_afternoon_thursday" json:"working_hour_end_afternoon_thursday"`
	Working_hour_start_morning_friday      string   `form:"working_hour_start_morning_friday" json:"working_hour_start_morning_friday"`
	Working_hour_end_morning_friday        string   `form:"working_hour_end_morning_friday" json:"working_hour_end_end_morning_friday"`
	Working_hour_start_afternoon_friday    string   `form:"working_hour_start_afternoon_friday" json:"working_hour_start_afternoon_friday"`
	Working_hour_end_afternoon_friday      string   `form:"working_hour_end_afternoon_friday" json:"working_hour_end_afternoon_friday"`
	Working_hour_start_morning_saturday    string   `form:"working_hour_start_morning_saturday" json:"working_hour_start_morning_saturday"`
	Working_hour_end_morning_saturday      string   `form:"working_hour_end_morning_saturday" json:"working_hour_end_end_morning_saturday"`
	Working_hour_start_afternoon_saturday  string   `form:"working_hour_start_afternoon_saturday" json:"working_hour_start_afternoon_saturday"`
	Working_hour_end_afternoon_saturday    string   `form:"working_hour_end_afternoon_saturday" json:"working_hour_end_afternoon_saturday"`
	Created_At                             string
}

type CompanyUsecase interface {
	Create(c context.Context, Company *Company) (int64, error)
}

type CompanyRepository interface {
	Create(c context.Context, Company *Company) (int64, error)
}
