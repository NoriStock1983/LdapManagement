// Copyright LdapTEST
// Written by Norifumi Sato
// Time 2024/06/20

package add

import (
	"fmt"
	"ldaptest/commons/ldapaccess"
	dto "ldaptest/models/DTO"
	"log"
	"strconv"

	"github.com/go-ldap/ldap/v3"
	"golang.org/x/text/encoding/unicode"
)

/* Add New User */
func NewAddLdapUser(newuser dto.Ldap) (bool, error) {

	l, err := ldapaccess.Ldapaccess()
	// 接続失敗時のエラーハンドリング
	if err != nil {
		return false, err
	}

	err = l.Bind("cn=admin,dc=nodomain", "nsatou")
	// バインド失敗時のエラーハンドリング
	if err != nil {
		fmt.Println("ldap bind error")
		return false, err
	}
	// ユーザパスワードをUTF16に変換
	utf16 := unicode.UTF16(unicode.LittleEndian, unicode.IgnoreBOM)
	u16pass, err := utf16.NewEncoder().String(newuser.UserPassword)
	if err != nil {
		fmt.Println("utf16 error")
		log.Fatal(err)
	}
	//dn作成
	dn := "cn=" + newuser.Cn + ",ou=" + newuser.Ou + ",dc=" + newuser.Dc

	fmt.Println(u16pass)
	/* 追加リクエスト作成 */
	addRequest := ldap.NewAddRequest(dn, []ldap.Control{})
	addRequest.Attribute("uid", []string{newuser.Uid})
	addRequest.Attribute("uidNumber", []string{strconv.Itoa(newuser.UidNumber)})
	addRequest.Attribute("gidNumber", []string{strconv.Itoa(newuser.GidNumber)})
	addRequest.Attribute("cn", []string{newuser.Cn})
	addRequest.Attribute("sn", []string{newuser.Sn})
	addRequest.Attribute("displayName", []string{newuser.DisplayName})
	addRequest.Attribute("mail", []string{newuser.Mail})
	addRequest.Attribute("homeDirectory", []string{newuser.HomeDirectory})
	addRequest.Attribute("objectClass", []string{"inetOrgPerson", "posixAccount", "shadowAccount"})
	addRequest.Attribute("userPassword", []string{u16pass})

	// 追加する属性を設定
	err1 := l.Add(addRequest)

	defer l.Close()

	if err1 != nil {
		fmt.Println(err1)
		return false, err
	}

	return true, nil
}

/* Add New Group */
func NewAddLdapGroup(newgroup dto.Ldap) (bool, error) {

	l, err := ldapaccess.Ldapaccess()
	// 接続失敗時のエラーハンドリング
	if err != nil {
		return false, err
	}

	err = l.Bind("cn=admin,dc=nodomain", "nsatou")
	// バインド失敗時のエラーハンドリング
	if err != nil {
		fmt.Println("ldap bind error")
		return false, err
	}
	//dn作成
	dn := "ou=" + newgroup.Ou + ",dc=" + newgroup.Dc
	fmt.Println(dn)
	addRequest := ldap.NewAddRequest(dn, []ldap.Control{})

	addRequest.Attribute("ou", []string{newgroup.Ou})
	addRequest.Attribute("objectClass", []string{"organizationalUnit"})
	// 追加する属性を設定
	err1 := l.Add(addRequest)

	defer l.Close()

	if err1 != nil {
		fmt.Println(err1)
		return false, err
	}

	return true, nil

}
