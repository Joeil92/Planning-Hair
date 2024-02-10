package repositories

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"strconv"
	"time"

	"github.com/Joeil92/Planning-Hair/models"
)

type CompanyRepository struct {
	db *sql.DB
}

func parseTime(timeStr string) *string {
	if timeStr == "" {
		return nil
	}

	parsedTime, err := time.Parse("15:04", timeStr)
	if err != nil {
		log.Fatal(err)
	}

	hourStr := strconv.Itoa(parsedTime.Hour())
	minuteStr := strconv.Itoa(parsedTime.Minute())

	resultStr := hourStr + ":" + minuteStr

	return &resultStr
}

func NewCompanyRepository(db *sql.DB) models.CompanyRepository {
	return &CompanyRepository{db: db}
}

func (r *CompanyRepository) Create(c context.Context, company *models.Company) (int64, error) {
	workingDaysJSON, err := json.Marshal(company.Working_days)
	if err != nil {
		return 0, err
	}

	var queryStr string = `INSERT INTO company(
		id, 
		name,
		description,
		address,
		working_days,
		category_id,
		working_hour_start_morning_monday,
		working_hour_end_morning_monday,
		working_hour_start_afternoon_monday,
		working_hour_end_afternoon_monday, 
		working_hour_start_morning_tuesday,
		working_hour_end_morning_tuesday,
		working_hour_start_afternoon_tuesday,
		working_hour_end_afternoon_tuesday,
		working_hour_start_morning_wednesday,
		working_hour_end_morning_wednesday,
		working_hour_start_afternoon_wednesday,
		working_hour_end_afternoon_wednesday,
		working_hour_start_morning_thursday,
		working_hour_end_morning_thursday,
		working_hour_start_afternoon_thursday,
		working_hour_end_afternoon_thursday,
		working_hour_start_morning_friday,
		working_hour_end_morning_friday,
		working_hour_start_afternoon_friday,
		working_hour_end_afternoon_friday,
		working_hour_start_morning_saturday,
		working_hour_end_morning_saturday,
		working_hour_start_afternoon_saturday,
		working_hour_end_afternoon_saturday) 
		VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

	insert, err := r.db.Exec(
		queryStr,
		company.Id,
		company.Name,
		company.Description,
		company.Address,
		string(workingDaysJSON),
		company.Category,
		parseTime(company.Working_hour_start_morning_monday),
		parseTime(company.Working_hour_end_morning_monday),
		parseTime(company.Working_hour_start_afternoon_monday),
		parseTime(company.Working_hour_end_afternoon_monday),
		parseTime(company.Working_hour_start_morning_tuesday),
		parseTime(company.Working_hour_end_morning_tuesday),
		parseTime(company.Working_hour_start_afternoon_tuesday),
		parseTime(company.Working_hour_end_afternoon_tuesday),
		parseTime(company.Working_hour_start_morning_wednesday),
		parseTime(company.Working_hour_end_morning_wednesday),
		parseTime(company.Working_hour_start_afternoon_wednesday),
		parseTime(company.Working_hour_end_afternoon_wednesday),
		parseTime(company.Working_hour_start_morning_thursday),
		parseTime(company.Working_hour_end_morning_thursday),
		parseTime(company.Working_hour_start_afternoon_thursday),
		parseTime(company.Working_hour_end_afternoon_thursday),
		parseTime(company.Working_hour_start_morning_friday),
		parseTime(company.Working_hour_end_morning_friday),
		parseTime(company.Working_hour_start_afternoon_friday),
		parseTime(company.Working_hour_end_afternoon_friday),
		parseTime(company.Working_hour_start_morning_saturday),
		parseTime(company.Working_hour_end_morning_saturday),
		parseTime(company.Working_hour_start_afternoon_saturday),
		parseTime(company.Working_hour_end_afternoon_saturday),
	)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return 0, err
	}

	lastInsertId, err := insert.LastInsertId()
	if err != nil {
		fmt.Println("Error getting last insert ID:", err)
		return 0, err
	}

	return lastInsertId, nil
}

func (r *CompanyRepository) AddUserCompany(c context.Context, userId int64, companyId int64) (int64, error) {
	var queryStr = "INSERT INTO user_company(user_id, company_id, role) VALUES (LAST_INSERT_ID(), LAST_INSERT_ID(), ?)"

	insert, err := r.db.Exec(queryStr, "administrator")
	if err != nil {
		fmt.Println("Error querying data:", err)
		return 0, err
	}

	lastInsertId, err := insert.LastInsertId()
	if err != nil {
		fmt.Println("Error getting last insert ID:", err)
		return 0, err
	}

	return lastInsertId, nil
}
