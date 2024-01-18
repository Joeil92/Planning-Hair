package main

import (
	router "github.com/Joeil92/Planning-Hair/api/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	gin := gin.Default()

	router.Router(gin)
	gin.Run(":8000")
}
