---
sidebar_position: 8
---

# מודולים

## מהו מודול?

מודול הוא קובץ Lua שמכיל קוד שניתן לייבא ולהשתמש בו בקבצים אחרים. מודולים מאפשרים לארגן את הקוד בצורה נוחה ולחלק אותו לחלקים קטנים שניתן לעשות בהם שימוש חוזר.

## יצירת מודול

ניצור מודול שמכיל פונקציה פשוטה. קודם כל, ניצור קובץ חדש ונקרא לו `DuckModule.lua`.

בתוך הקובץ נכתוב את הקוד הבא:

```lua
local DuckModule = {}

function DuckModule.quack()
    print("קוואק! אני ברווז!")
end

return DuckModule
```

## שימוש במודול

כדי להשתמש במודול שיצרנו, נייבא אותו בקובץ אחר באמצעות `require`.

```lua
local DuckModule = require(game.ServerScriptService.DuckModule)

DuckModule.quack()  -- ידפיס "קוואק! אני ברווז!"
```
