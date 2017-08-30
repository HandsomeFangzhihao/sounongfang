SET NAMES UTF8;
DROP DATABASE IF EXISTS sou;
CREATE DATABASE sou CHARSET=UTF8;
USE sou;

CREATE TABLE login(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(12),
    upwd VARCHAR(12)
);

INSERT INTO login VALUES
(NULL,'wangzhe','123456'),
(NULL,'rongyao','456789');

CREATE TABLE tuhuo(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(64),
    pic VARCHAR(64),
    price FLOAT(6,2),
    cprice FLOAT(6,2)
);

INSERT INTO tuhuo VALUES
(NULL,'【29元/斤】湘西山林放养黑猪肉','images/6361801988686574924433521.jpg','87.00','105.00'),
(NULL,'邵阳土锅黑糖姜枣膏2瓶装','images/6360463200333460936215884.jpg','136.00','158.00'),
(NULL,'郴州绿野东江鱼礼包（400g）','images/6361989898578354398406802.jpg','36.00','45.00'),
(NULL,'蓝莓果干2盒装（120g/盒）','images/6361845612758318907499337.jpg','88.00','118.00'),
(NULL,'郴州农家糍粑5袋装（5种口味）','images/6360287874281497546008783.jpg','35.00','45.00'),
(NULL,'新疆枣夹核桃500g（次日发货）','images/6360462246729723078895711.jpg','45.00','65.00'),
(NULL,'石门土家香肠三斤装','images/6361991567733244492379273.jpg','128.00','150.00'),
(NULL,'榜爷五花腊肉免烧皮免刮洗隔年','images/2016120530536356.JPG','58.00','58.00');

CREATE TABLE shuiguo(
     pid INT PRIMARY KEY AUTO_INCREMENT,
     pname VARCHAR(64),
     pic VARCHAR(64),
     price FLOAT(6,2),
     cprice FLOAT(6,2)
);

INSERT INTO shuiguo VALUES
(NULL,'爱心助学 崀山脐橙8斤装（湖南','images/6361603609913779965980610.jpg','42.00','72.00'),
(NULL,'邵阳崀山脐橙8斤装*2件（周五','images/6361612253384737897612394.jpg','83.80','138.00'),
(NULL,'新疆库尔勒香梨原装箱15斤装','images/6361661886736837036469037.jpg','85.00','118.00'),
(NULL,'越南红心火龙果原装整件17斤','images/6361723185969202518265746.jpg','188.00','258.00'),
(NULL,'智利车厘子4斤装（果径26-','images/6361602594621543775488815.jpg','238.00','356.00'),
(NULL,'新疆阿克苏苹果15斤装（限湖南','images/6361955410523070764868117.jpg','128.00','188.00'),
(NULL,'菲律宾进口凤梨整件9个装（净重','images/6361739692646857585431084.jpg','158.00','228.00'),
(NULL,'永兴冰糖橙10斤装（果径50','images/6361740568402876088903708.jpg','88.00','108.00');


CREATE TABLE lingshi(
     pid INT PRIMARY KEY AUTO_INCREMENT,
     pname VARCHAR(64),
     pic VARCHAR(64),
     price FLOAT(6,2),
     cprice FLOAT(6,2)
);

INSERT INTO lingshi VALUES
(NULL,'山东淄博山楂两种口味组合装','images/6360506548505332648459391.jpg','33.80','49.00'),
(NULL,'郴州东江鱼乡情休闲大礼包','images/6360419827318080895889389.jpg','38.00','58.00'),
(NULL,'超级先生鱼尾/鱼下巴/鱼排三合','images/6359493450665159192013494.jpg','38.00','48.00'),
(NULL,'億昌原味牛轧糖3袋装（128g/袋','images/6361412393380160079212804.jpg','52.00','68.00'),
(NULL,' 超级先生鱼下巴150g*3包 次日）','images/6359389896673300002668787.jpg','38.00','48.00'),
(NULL,'億昌原味牛轧糖3袋装（128g/袋 次','images/6359354908265200007975871.jpg','68.00','98.00'),
(NULL,'精选巴旦木 500g/袋（次日发','images/6361679189715521377613810.jpg','39.00','48.00'),
(NULL,'火宫殿豉汁味臭豆腐128g*2袋','images/6359677009472100002168248.jpg','28.00','32.00');


CREATE TABLE lihe(
     pid INT PRIMARY KEY AUTO_INCREMENT,
     pname VARCHAR(64),
     pic VARCHAR(64),
     price FLOAT(6,2),
     cprice FLOAT(6,2)
);

INSERT INTO lihe VALUES
(NULL,'乡里乡亲—年味儿礼券','images/6361863034873629183982998.jpg','688.00','888.00'),
(NULL,'鸿运盛礼','images/6361860776675951452060163.jpg','108.00','158.00'),
(NULL,'嗳也嗳意浓礼盒','images/6361860838105480138331089.jpg','108.00','158.00'),
(NULL,' 糖果礼盒','images/6361860049793364581110957.jpg','118.00','168.00'),
(NULL,'绽放干货礼盒','images/6361860040189284864568325.jpg','298.00','358.00'),
(NULL,'年味儿礼盒','images/6361860035850641706350351.jpg','348.00','408.00'),
(NULL,'益阳竹乡臻品年货礼包','images/6361835846884727996198201.jpg','158.00','188.00'),
(NULL,'邵阳崀山脐橙礼盒装10斤（湖南','images/6361758374033725642837515.jpg','68.00','88.00');


CREATE TABLE tuhuolt(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64)
);
INSERT INTO tuhuolt VALUES(NULL,'images/6361904048787628994022905.jpg');

CREATE TABLE shuiguolt(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64)
);
INSERT INTO shuiguolt VALUES(NULL,'images/6361603165405861551286474.jpg');

CREATE TABLE lingshilt(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64)
);
INSERT INTO lingshilt VALUES(NULL,'images/6361179651834215744887514.jpg');

CREATE TABLE lihelt(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64)
);
INSERT INTO lihelt VALUES(NULL,'images/6360989251767823358072864.jpg');

CREATE TABLE product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64),
    pname VARCHAR(32),
    psell INT,
    price FLOAT(6,2),
    pcost FLOAT(6,2)
);

INSERT INTO product VALUES
(NULL,'images/img/6361603609913779965980610.jpg','爱心助学 崀山脐','103','42.00','72.00'),
(NULL,'images/img/6361612253384737897612394.jpg','邵阳崀山脐橙8','136','83.80','138.00'),
(NULL,'images/img/6361661886736837036469037.jpg','新疆库尔勒香梨','4','29.00','58.00'),
(NULL,'images/img/2016122418541529.JPG','永兴冰糖橙甜蜜橙','36','148.00','198.00'),
(NULL,'images/img/2016122418541529.JPG','【元旦献礼】永','225','68.00','88.00'),
(NULL,'images/img/2016122418541529.JPG','永兴冰糖橙特大','336','38.00','58.00'),
(NULL,'images/img/2016122418541529.JPG','年终特惠：永兴','8','168.00','188.00'),
(NULL,'images/img/6361723185969202518265746.jpg','越南红心火龙果','56','158.00','188.00'),
(NULL,'images/img/6361663814863768288086485.jpg','智利车厘子2斤','25','218.00','360.00'),
(NULL,'images/img/6361661886736837036469037.jpg','新疆库尔勒香梨','69','420.00','720.00'),
(NULL,'images/img/6361680030009613401393035.jpg','邵阳崀山脐橙8','66','88.00','168.00'),
(NULL,'images/img/6361680058550846064266028.jpg','邵阳崀山脐橙8','58','78.00','108.00'),
(NULL,'images/img/6361661644513256756755956.jpg','智利车厘子原装','360','238.00','356.00'),
(NULL,'images/img/6361654271994716787672642.jpg','山东莱阳丰水梨','25','88.00','168.00'),
(NULL,'images/img/6361758374033725642837515.jpg','邵阳崀山脐橙礼','69','99.00','160.00'),
(NULL,'images/img/6361602546486698028645672.jpg','智利车厘子4斤','21','26.00','45.00'),
(NULL,'images/img/6361679953828660822816038.jpg','新疆阿克苏苹果','105','42.00','72.00'),
(NULL,'images/img/6361679953828660822816038.jpg','邵阳崀山脐橙8','106','88.00','168.00'),
(NULL,'images/img/6361758387627509341995519.jpg','邵阳崀山脐橙5','58','88.00','168.00'),
(NULL,'images/img/6359441225462400007317682.jpg','孕妇营养套餐','690','88.00','168.00'),
(NULL,'images/img/6361955410523070764868117.jpg','新疆阿克苏苹果','22','118.00','168.00'),
(NULL,'images/img/6361724321582880416105316.jpg','新疆阿克苏苹果','88','88.00','168.00'),
(NULL,'images/img/6361739692646857585431084.jpg','智利蓝莓12盒装','57','208.00','288.00'),
(NULL,'images/img/6361603609913779965980610.jpg','菲律宾进口凤梨','103','158.00','228.00');