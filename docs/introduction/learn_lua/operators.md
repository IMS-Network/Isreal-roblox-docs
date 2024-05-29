---
sidebar_position: 3
---

# אופרטורים
## מהו אופרטור?

אופרטור הוא סימן או סמל שמשמש לביצוע פעולה מתמטית או לוגית על אחד או יותר ערכים (אופרנדים). ב-Roblox Studio, ישנם אופרטורים שונים כגון אופרטורים מתמטיים, השוואתיים ולוגיים.

## אופרטורים מתמטיים

אופרטורים מתמטיים משמשים לביצוע פעולות חשבון בסיסיות. הנה דוגמאות עם צורות גיאומטריות:

### חיבור (+)

נניח שיש לנו שני ריבועים ואנחנו רוצים לדעת את המספר הכולל של הצלעות:

```lua
local ribua1_tzelot = 4
local ribua2_tzelot = 4
local total_tzelot = ribua1_tzelot + ribua2_tzelot
print(total_tzelot)  -- ידפיס 8
```

### חיסור (-)

נניח שיש לנו משושה ומשולש ואנחנו רוצים לדעת כמה צלעות יותר יש למשושה:

```lua
local meshoshe_tzelot = 6
local meshulash_tzelot = 3
local hefer_tzelot = meshoshe_tzelot - meshulash_tzelot
print(hefer_tzelot)  -- ידפיס 3
```

### כפל (*)

נניח שיש לנו ריבוע ואנחנו רוצים לדעת את היקף הריבוע (סך כל הצלעות):

```lua
local ribua_tzelot = 4
local orech_tzela = 5
local hekef_ribua = ribua_tzelot * orech_tzela
print(hekef_ribua)  -- ידפיס 20
```

### חילוק (/)

נניח שיש לנו משושה ואנחנו רוצים לדעת את אורך כל צלע כאשר ההיקף הכולל ידוע:

```lua
local hekef_meshoshe = 24
local meshoshe_tzelot = 6
local orech_tzela_meshoshe = hekef_meshoshe / meshoshe_tzelot
print(orech_tzela_meshoshe)  -- ידפיס 4
```

## אופרטורים השוואתיים

אופרטורים השוואתיים משמשים להשוואה בין ערכים. הנה דוגמאות עם צורות גיאומטריות:

### שווה ל- (==)

נבדוק אם מספר הצלעות של ריבוע שווה למספר הצלעות של משולש:

```lua
local ribua_tzelot = 4
local meshulash_tzelot = 3
local isEqual = ribua_tzelot == meshulash_tzelot
print(isEqual)  -- ידפיס false
```

### לא שווה ל- (~=)

נבדוק אם מספר הצלעות של ריבוע אינו שווה למספר הצלעות של משולש:

```lua
local ribua_tzelot = 4
local meshulash_tzelot = 3
local isNotEqual = ribua_tzelot ~= meshulash_tzelot
print(isNotEqual)  -- ידפיס true
```

### גדול מ- (>)

נבדוק אם מספר הצלעות של משושה גדול ממספר הצלעות של משולש:

```lua
local meshoshe_tzelot = 6
local meshulash_tzelot = 3
local isGreater = meshoshe_tzelot > meshulash_tzelot
print(isGreater)  -- ידפיס true
```

### קטן מ- ({'<'})

נבדוק אם מספר הצלעות של משולש קטן ממספר הצלעות של ריבוע:

```lua
local meshulash_tzelot = 3
local ribua_tzelot = 4
local isLesser = meshulash_tzelot < ribua_tzelot
print(isLesser)  -- ידפיס true
```

## אופרטורים לוגיים

אופרטורים לוגיים משמשים לביצוע פעולות לוגיות על ערכים בוליאניים (true/false). הנה דוגמאות עם צורות גיאומטריות:

### וגם (and)

נבדוק אם מספר הצלעות של ריבוע הוא 4 ואם מספר הצלעות של משולש הוא 3:

```lua
local ribua_tzelot = 4
local meshulash_tzelot = 3
local isCorrect = (ribua_tzelot == 4) and (meshulash_tzelot == 3)
print(isCorrect)  -- ידפיס true
```

### או (or)

נבדוק אם מספר הצלעות של ריבוע הוא 4 או אם מספר הצלעות של משולש הוא 4:

```lua
local ribua_tzelot = 4
local meshulash_tzelot = 3
local isEither = (ribua_tzelot == 4) or (meshulash_tzelot == 4)
print(isEither)  -- ידפיס true
```

### לא (not)

נבדוק אם מספר הצלעות של ריבוע אינו שווה ל-4:

```lua
local ribua_tzelot = 4
local isNotFour = not (ribua_tzelot == 4)
print(isNotFour)  -- ידפיס false
```