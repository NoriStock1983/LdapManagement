package searchcontroller

import (
	"fmt"
	dto "ldaptest/models/DTO"
	search "ldaptest/services/search"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// LdapSearchUserController function
// @Summary LdapSearchUserController
// @Description get ldap user
// @Tags LdapSearchUserController
// @Accept  json
// @Produce  json
// @Success 200 {object} string

func LdapSearchUserController(c *gin.Context) {

	//usercd := c.Param("usercd")
	usercd := "a0006802"
	getldapuser, error := search.LdapSearchUser(usercd)

	if error != nil {
		log.Println(error)
	}
	fmt.Println(getldapuser)
	c.JSON(http.StatusOK, getldapuser)
}

// LdapSearchOuController function
// @Summary LdapSearchOuController
// @Description get ldap ou
// @Tags LdapSearchOuController
// @Accept  json
// @Produce  json
// @Success 200 {object} string

func LdapSearchOuController(c *gin.Context) {

	var searchCondition dto.LdapSearchCondition = dto.LdapSearchCondition{}

	searchCondition.Ou = c.Param("ou")
	searchCondition.Dc = c.Param("dc")
	searchCondition.Uid = c.Param("uid")

	getldapou, error := search.LdapSearchCondition(searchCondition)

	if error != nil {
		log.Println(error)
	}
	c.JSON(http.StatusOK, getldapou)
}
