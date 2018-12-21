// class HashMap {
//     public constructor(){}
//  13         let map = [];
//  14         public keyValPair = function (key, value) {
//  15              key = key;
//  16              value = value;
//  17         }
//  18          put = function (key, value) {
//  19             let position = djb2Code(key);
//  20             if (map[position] == undefined) {
//  21                 map[position] = new LinkedList();
//  22             }
//  23             map[position].append(new keyValPair(key, value));
//  24         },
//  25          get = function (key) {
//  26             let position = djb2Code(key);
//  27             if (map[position] != undefined) {
//  28                 let current = map[position].getHead();
//  29                 while (current.next) {
//  30                     if (current.element.key === key) {  //严格判断
//  31                         return current.element.value;
//  32                     }
//  33                     current = current.next;
//  34                 }
//  35                 if (current.element.key === key) {//如果只有head节点，则不会进while.  还有尾节点，不会进while,这个判断必不可少
//  36                     return current.element.value;
//  37                 }
//  38             }
//  39             return undefined;
//  40         },
//  41          remove = function (key) {
//  42             let position = djb2Code(key);
//  43             if (map[position] != undefined) {
//  44                 let current = map[position].getHead();
//  45                 while (current.next) {
//  46                     if (current.element.key === key) {
//  47                         map[position].remove(current.element);
//  48                         if (map[position].isEmpty()) {
//  49                             map[position] == undefined;
//  50                         }
//  51                         return true;
//  52                     }
//  53                     current = current.next;
//  54                 }
//  55                 if (current.element.key === key) {
//  56                     map[position].remove(current.element);
//  57                     if (map[position].isEmpty()) {
//  58                         map[position] == undefined;
//  59                     }
//  60                     return true;
//  61                 }
//  62             }
//  63         }
//  64     }