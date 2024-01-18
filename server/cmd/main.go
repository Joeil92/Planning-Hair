package main

import (
	"fmt"

	router "github.com/Joeil92/Planning-Hair/api/routes"
	"github.com/Joeil92/Planning-Hair/config"
	"github.com/gin-gonic/gin"
)

func main() {
	gin := gin.Default()
	db, err := config.ConnectDB()
	if err != nil {
		fmt.Println(err)
		return
	}

	router.Router(gin)
	gin.Run(":8000")
}
