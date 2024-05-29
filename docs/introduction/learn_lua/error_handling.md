---
sidebar_position: 9
---

# טיפול בשגיאות

## מהי שגיאה?

שגיאה היא מצב שבו הקוד נתקל בבעיה שאינה מאפשרת לו להמשיך לפעול כראוי. טיפול בשגיאות מאפשר לתוכנית להתמודד עם מצבים כאלה בצורה מסודרת ולמנוע קריסה של התוכנית.

## שימוש ב-pcall

ב-Roblox Studio, ניתן להשתמש בפונקציה `pcall` (Protected Call) כדי לטפל בשגיאות. הפונקציה `pcall` מריצה פונקציה אחרת ומחזירה ערך בוליאני המציין אם הפעולה הצליחה או נכשלה.

### דוגמה - ברווזים

נניח שיש לנו פונקציה שמדפיסה את שם הברווז, אבל לפעמים השם עלול להיות `nil` (לא קיים):

```lua
function printDuckName(duck)
    if duck.name then
        print("שם הברווז הוא " .. duck.name)
    else
        error("השם של הברווז לא קיים!")
    end
end

local dannyDuck = {name = "דני"}
local unknownDuck = {}

-- ננסה להדפיס את השם של הברווזים
local success, message = pcall(printDuckName, dannyDuck)
if not success then
    print("שגיאה: " .. message)
end

success, message = pcall(printDuckName, unknownDuck)
if not success then
    print("שגיאה: " .. message)
end
```