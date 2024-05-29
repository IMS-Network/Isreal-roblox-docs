---
sidebar_position: 6
---

# פעולות
## מהי פעולה?

פעולה (Function) היא קטע קוד שניתן לקרוא לו לבצע משימה מסוימת. פעולות משמשות לארגון הקוד בצורה נוחה, כדי להימנע מחזרה על אותו קטע קוד במקומות שונים ולהפוך את הקוד לקל יותר להבנה ולתחזוקה.

## יצירת פעולה

כדי ליצור פעולה ב-Roblox Studio, משתמשים במילת המפתח `function` ולאחר מכן שם הפעולה. לדוגמה, ניצור פעולה שמדפיסה הודעה על ברווז:

```lua
function sayHelloDuck()
    print("שלום, אני ברווז!")
end
```

כדי להפעיל את הפעולה, פשוט נקרא לה לפי השם שלה:

```lua
sayHelloDuck()  -- ידפיס "שלום, אני ברווז!"
```

## פעולות עם פרמטרים

לעיתים נרצה שפעולה תקבל מידע כלשהו כדי לבצע את המשימה שלה. לדוגמה, ניצור פעולה שמדפיסה את השם של הברווז:

```lua
function greetDuck(duckName)
    print("שלום, אני " .. duckName .. " הברווז!")
end
```

כדי להפעיל את הפעולה עם שם ברווז מסוים:

```lua
greetDuck("דני")  -- ידפיס "שלום, אני דני הברווז!"
```

## פעולות שמחזירות ערך

פעולה יכולה גם להחזיר ערך באמצעות מילת המפתח `return`. לדוגמה, ניצור פעולה שמחשבת את מספר הכנפיים של מספר ברווזים:

```lua
function calculateWings(numberOfDucks)
    local wings = numberOfDucks * 2
    return wings
end
```

כדי להשתמש בפעולה ולהדפיס את מספר הכנפיים של 3 ברווזים:

```lua
local wingsOfThreeDucks = calculateWings(3)
print("לשלושה ברווזים יש " .. wingsOfThreeDucks .. " כנפיים.")  -- ידפיס "לשלושה ברווזים יש 6 כנפיים."
```

## פעולות מורכבות

ניתן לשלב מספר פעולות כדי לבצע משימות מורכבות יותר. לדוגמה, ניצור פעולה שבודקת אם לברווז יש כנפיים ואם כן, מדפיסה הודעה מתאימה:

```lua
function hasWings(duck)
    return duck.wings > 0
end

function describeDuck(duck)
    if hasWings(duck) then
        print(duck.name .. " הוא ברווז עם כנפיים.")
    else
        print(duck.name .. " הוא ברווז ללא כנפיים.")
    end
end

local dannyDuck = {name = "דני", wings = 2}
describeDuck(dannyDuck)  -- ידפיס "דני הוא ברווז עם כנפיים."
```
