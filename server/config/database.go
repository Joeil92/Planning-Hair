package config

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type connectDB struct {
	db *sql.DB
}

func NewConnectionDB() {

}

func ConnectDB() (*sql.DB, error) {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/ph_database")
	if err != nil {
		return nil, err
	}
	defer db.Close()

	var version string
	db.QueryRow("SELECT VERSION()").Scan(&version)

	fmt.Println("Connected to:", version)

	return db, nil
}
