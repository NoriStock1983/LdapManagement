package ldapaccess

import (
	"crypto/tls"
	"log"

	"github.com/go-ldap/ldap/v3"
)

func Ldapaccess() (*ldap.Conn, error) {
	ldapServer := "ldap://192.168.2.115:389"
	// ldapServerへの接続確認
	l, err := ldap.DialURL(ldapServer, ldap.DialWithTLSConfig(&tls.Config{InsecureSkipVerify: true}))
	// 接続失敗時のエラーハンドリング
	if err != nil {
		log.Printf("%s\n", "ldap connection error")
		return nil, err
	}

	return l, nil

}
