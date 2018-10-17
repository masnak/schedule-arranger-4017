//このファイルは、sequelizeの読み込みの定義を書くファイル
'use strict';
const Sequelize = require('sequelize');
// 外部のSequelizeからsequelizeモジュールを読み込んできている
// 頭文字が大文字なのはなぜ？　クラスなのか？
const sequelize = new Sequelize(
    'postgres://postgres:postgres@localhost/schedule_arranger',
    {
        logging: true,
        operatorAliases: false
    });

    //小文字のsequelizeを変数として作成。その中に大文字のSequelizeから新しい
    //インスタンスをnewで作成して、データベース名とユーザー名、データベース名をURLで指定
    //ログを取るように設定。operatorsAliases（謎）は使わない

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};

//module.exportsは何のために書くのだったか。外部から参照をするためだったか。
//データベースを小文字のsequelize, 大文字のSequelizeは何？

