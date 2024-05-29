---
sidebar_position: 1
---
# הדפסה

## מבוא להדפסה
הדפסה היא כלי חשוב בתכנות, המשמשת אותנו להצגת מידע במהלך ריצת התוכנית. ברובלוקס לואה, אנו משתמשים בפונקציה `print` כדי להדפיס טקסט ונתונים אחרים למסוף (Console). זהו כלי שימושי במיוחד לדיבוג ובדיקת ערכי משתנים בזמן אמת.

## שימוש בפונקציה `print`
הפונקציה `print` מקבלת כפרמטרים ערכים שונים ומדפיסה אותם למסוף. ניתן להדפיס מספרים, מחרוזות, בוליאנים ועוד.

### דוגמה בסיסית
הדפסת הודעה פשוטה:
```
print("Bananas are delicious!")
```
התוצאה שתופיע במסוף תהיה:
Bananas are delicious!

### הדפסת משתנים
ניתן להדפיס את הערכים של משתנים שהגדרנו:
```
local bananaCount = 7
local bananaMessage = "I have"
print(bananaMessage, bananaCount, "bananas")
```
התוצאה שתופיע במסוף תהיה:
I have 7 bananas

### הדפסת בוליאנים וערכי nil
ניתן להדפיס גם ערכים בוליאניים וערכי nil:
```
local isBananaRipe = true
local unsetVariable
print(isBananaRipe)  -- מדפיס true
print(unsetVariable)  -- מדפיס nil
```

### הדפסת טבלאות
כאשר מדפיסים טבלה באמצעות `print`, התוצאה תהיה הכתובת בזיכרון של הטבלה. כדי להדפיס את תוכן הטבלה, נצטרך לעבור על הערכים שבתוכה ולהדפיס אותם אחד אחד:
```
local playerData = {
    name = "BananaLover",
    bananas = 7,
    isActive = true
}

for key, value in pairs(playerData) do
    print(key, value)
end
```
התוצאה שתופיע במסוף תהיה:
name BananaLover
bananas 7
isActive true

## שימושים מתקדמים

### הדפסת טקסט מעוצב
ניתן להשתמש בפונקציה `string.format` כדי לעצב טקסט לפני ההדפסה:
```
local playerName = "BananaLover"
local bananaCount = 7
print(string.format("Player %s has %d bananas", playerName, bananaCount))
```
התוצאה שתופיע במסוף תהיה:
Player BananaLover has 7 bananas

### הדפסת ערכים מרובים
ניתן להדפיס ערכים מרובים בו זמנית על ידי הפרדתם בפסיקים:
```
local x, y, z = 10, 20, 30
print("Coordinates:", x, y, z)
```
התוצאה שתופיע במסוף תהיה:
Coordinates: 10 20 30

## סיכום
הפונקציה `print` היא כלי עוצמתי ופשוט המשמש להדפסת מידע במסוף ברובלוקס לואה. השימוש בה מאפשר לנו לבדוק ערכי משתנים, לעקוב אחרי זרימת התוכנית ולבצע דיבוג יעיל. הכרת השימושים הבסיסיים והמתקדמים של `print` תעזור לכם בתהליך הפיתוח והתחזוקה של הקוד.
