package main

import (
	"fmt"

	"github.com/Joeil92/Planning-Hair/api/routes"
	"github.com/Joeil92/Planning-Hair/pkg"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	gin := gin.Default()
	db, err := pkg.InitDB()
	if err != nil {
		fmt.Println(err)
		return
	}
	defer db.Close()

	gin.Use(cors.Default())

	gin.SetTrustedProxies(nil)

	routes.Router(gin, db)
	gin.Run(":8000")
}
