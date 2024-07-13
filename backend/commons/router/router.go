package router

import (
	searchcontroller "ldaptest/controllers/searchController"

	"github.com/gin-gonic/gin"
)

func Router() *gin.Engine {
	router := gin.Default()

	search := router.Group("/search")
	{
		search.GET("/user", searchcontroller.LdapSearchUserController)
		search.GET("/condition", searchcontroller.LdapSearchOuController)
	}
	// ルーティング

	return router

}
