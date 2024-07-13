package serach

import (
	"fmt"
	"ldaptest/commons/ldapaccess"
	dto "ldaptest/models/DTO"
	"log"

	"github.com/go-ldap/ldap/v3"
)

/* 全件検索 */
func AllLdapSearch() (string, error) {

	l, err := ldapaccess.Ldapaccess()

	// 接続失敗時のエラーハンドリング
	if err != nil {
		return "", err
	}
	err = l.Bind("cn=admin,dc=nodomain", "nsatou")
	// バインド失敗時のエラーハンドリング
	if err != nil {
		log.Printf("%s\n", "ldap bind error")
		return "", err
	}

	return "", nil
}

/* 指定された条件で登録されたデータを取得する。 */
func LdapSearchUser(usercd string) (dto.Ldap, error) {

	var getuser dto.Ldap = dto.Ldap{}
	filter := fmt.Sprintf("(uid=%s)", ldap.EscapeFilter(usercd))
	l, err := ldapaccess.Ldapaccess()
	// 接続失敗時のエラーハンドリング
	if err != nil {
		return getuser, err
	}
	err = l.Bind("cn=admin,dc=nodomain", "nsatou")
	// バインド失敗時のエラーハンドリング
	if err != nil {
		log.Printf("%s\n", "ldap bind error")
		return getuser, err
	}

	log.Printf("%s\n", "ldap Server logged in successfully")
	log.Println("start search")
	searchRequest := ldap.NewSearchRequest(
		"dc=nodomain",
		ldap.ScopeWholeSubtree, ldap.NeverDerefAliases, 0, 0, false,
		filter,
		[]string{"dn", "uid", "ou", "dc", "cn", "sn", "givenName", "userPassword", "whenChanged"},
		nil,
	)
	//検索リクエストを基にディレクトリ内検索
	sr, err := l.Search(searchRequest)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(sr)
	//検索結果のリスト出力

	entry := sr.Entries[0]
	getuser = dto.Ldap{
		Uid:          entry.GetAttributeValue("uid"),
		Ou:           entry.GetAttributeValue("ou"),
		Dc:           entry.GetAttributeValue("dc"),
		Cn:           entry.GetAttributeValue("cn"),
		Sn:           entry.GetAttributeValue("sn"),
		GivenName:    entry.GetAttributeValue("givenName"),
		UserPassword: entry.GetAttributeValue("userPassword"),
		WhenChanged:  entry.GetAttributeValue("whenChanged"),
	}

	defer l.Close()
	return getuser, nil
}

func LdapSearchCondition(searchcondition dto.LdapSearchCondition) ([]dto.Ldap, error) {

	var getuser []dto.Ldap = []dto.Ldap{}

	filter := ""
	if searchcondition.Uid != "" {
		filter = fmt.Sprintf("(uid=%s)", ldap.EscapeFilter(searchcondition.Uid))
	}
	if searchcondition.Ou != "" {
		filter += fmt.Sprintf("(ou=%s)", ldap.EscapeFilter(searchcondition.Ou))
	}
	if searchcondition.Dc != "" {
		filter += fmt.Sprintf("(dc=%s)", ldap.EscapeFilter(searchcondition.Dc))
	}

	l, err := ldapaccess.Ldapaccess()
	// 接続失敗時のエラーハンドリング
	if err != nil {
		return getuser, err
	}
	err = l.Bind("cn=admin,dc=nodomain", "nsatou")
	// バインド失敗時のエラーハンドリング
	if err != nil {
		log.Printf("%s\n", "ldap bind error")
		return getuser, err
	}

	searchRequest := ldap.NewSearchRequest(
		"dc=nodomain",
		ldap.ScopeWholeSubtree, ldap.NeverDerefAliases, 0, 0, false,
		filter,
		[]string{"dn", "uid", "ou", "dc", "cn", "sn", "givenName", "userPassword", "whenChanged"},
		nil,
	)
	//検索リクエストを基にディレクトリ内検索
	sr, err := l.Search(searchRequest)
	if err != nil {
		log.Fatal(err)
	}

	//検索結果のリスト出力
	for _, entry := range sr.Entries {
		getuser = append(getuser, dto.Ldap{
			Uid:          entry.GetAttributeValue("uid"),
			Ou:           entry.GetAttributeValue("ou"),
			Dc:           entry.GetAttributeValue("dc"),
			Cn:           entry.GetAttributeValue("cn"),
			Sn:           entry.GetAttributeValue("sn"),
			GivenName:    entry.GetAttributeValue("givenName"),
			UserPassword: entry.GetAttributeValue("userPassword"),
		},
		)
	}
	defer l.Close()
	return getuser, nil
}
