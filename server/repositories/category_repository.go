package repositories

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/Joeil92/Planning-Hair/models"
)

type categoryRepository struct {
	db *sql.DB
}

func NewCategoryRepository(db *sql.DB) models.CategoryRepository {
	return &categoryRepository{db: db}
}

func (r *categoryRepository) Create(c context.Context, category *models.Category) (int64, error) {
	var query string = `INSERT INTO category(name, description) VALUES(?, ?)`

	insert, err := r.db.Exec(query, category.Name, category.Description)
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

func (r *categoryRepository) FindAll(c context.Context) ([]models.Category, error) {
	var query = `SELECT * FROM category`
	var categories []models.Category

	rows, err := r.db.Query(query)
	if err != nil {
		fmt.Println("Error querying data:", err)
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var category models.Category
		if err := rows.Scan(&category.Id, &category.Name, &category.Description, &category.Created_at); err != nil {
			fmt.Println("Error scanning row:", err)
			return nil, err
		}
		categories = append(categories, category)
	}

	if err := rows.Err(); err != nil {
		fmt.Println("Error after scanning rows:", err)
		return nil, err
	}

	return categories, nil
}
