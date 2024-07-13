package delete

import (
	"fmt"
	"ldaptest/commons/ldapaccess"

	"github.com/go-ldap/ldap/v3"
)

func LdapDeleteUser() (bool, error) {

	l, err := ldapaccess.Ldapaccess()
	// 接続失敗時のエラーハンドリング
	if err != nil {
		return false, err
	}

	err = l.Bind("cn=admin,dc=nodomain", "nsatou")
	// バインド失敗時のエラーハンドリング
	if err != nil {
		return false, err
	}

	// 削除リクエスト作成
	delRequest := ldap.NewDelRequest("cn=test user,ou=info,dc=nodomain", nil)

	delerr := l.Del(delRequest)

	defer l.Close()

	if delerr != nil {
		fmt.Println(delerr)
		return false, delerr
	}

	return true, nil
}
