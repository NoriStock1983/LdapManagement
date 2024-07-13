/*
ここはパッケージコメントの最初になるから見出しではないよー

# Hで始まり単一行かつ句読点なしかつ前が見出しではないのでこれは見出し

段落段落
段落段落
段落段落

次の段落
次の段落

	整形済みテキスt

次のやつはリンクになるはず。
https://golang.org/

参考URL:
https://qiita.com/jca02266/items/bf00acf88fde8bc29775
*/

package main

import (
	"ldaptest/commons/router"
)

func main() {
	router := router.Router()
	router.Run(":8080")

}
