import json

# Načtení surovin
def load_ingredients(filename):
    with open(filename, "r", encoding="utf-8") as f:
        data = json.load(f)

    result = {}

    for item in data:
        id_ = item["id"]
        name = item["nm"]
        qty = item["qty"]

        if id_ in result:
            result[id_]["quantity"] += qty
        else:
            result[id_] = {
                "id": id_,
                "name": name,
                "quantity": qty
            }

    return list(result.values())


# Seřazení
def sort_ingredients(ingredients_list):
    return sorted(ingredients_list, key=lambda x: x["name"])


# Přepočet porcí
def calculate_portions(ingredients, adults, childs):
    total = adults + (childs * 0.5)

    for item in ingredients:
        item["quantity"] *= total

    return ingredients


# Ukázka použití
if __name__ == "__main__":
    data = load_ingredients("data.json")
    data = sort_ingredients(data)
    data = calculate_portions(data, 2, 2)

    for i in data:
        print(i)