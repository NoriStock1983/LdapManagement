package dto

type Ldap struct {
	Uid           string `json:"uid"`           // ユーザID
	Ou            string `json:"ou"`            // 組織単位
	Dc            string `json:"dc"`            // ドメインコンポーネント
	Cn            string `json:"cn"`            // コモンネーム
	Sn            string `json:"sn"`            // サーネーム
	GivenName     string `json:"givenname"`     // 名前
	DisplayName   string `json:"displayname"`   // 表示名
	UserPassword  string `json:"userpassword"`  // ユーザパスワード
	UidNumber     int    `json:"uidnumber"`     // ユーザID番号
	GidNumber     int    `json:"gidnumber"`     // グループID番号
	Mail          string `json:"mail"`          // メールアドレス
	HomeDirectory string `json:"homedirectory"` // ホームディレクトリ
	WhenChanged   string `json:"whenchanged"`   // 更新日時

}

// Ldap検索条件
type LdapSearchCondition struct {
	Uid string `json:"uid"` // ユーザID
	Ou  string `json:"ou"`  // 組織単位
	Dc  string `json:"dc"`  // ドメインコンポーネント

}
