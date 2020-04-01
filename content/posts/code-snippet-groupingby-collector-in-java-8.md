---
title: 'Code Snippet: GroupingBy Collector in Java 8'
date: 2020-04-01T07:50:23.319Z
tags:
  - java
  - java8
  - groupingby
  - collector
  - stream
description: This article is about the groupingBy function of Java Collectors API.
---
#### Java 8 Collectors API - GroupingBy function

The GroupingBy function serves the purpose of grouping records in a list based on a property, just like ‘group by’ function in a SQL query.
If there is a case where you have a list of objects and you want to group it based on a property of that object, you can achieve it by using GroupingBy function.


**Simple Example:**
`Class Item {
	Private int id;
	Private String itemType;
	Private String itemName;
	Private Double price;
}`

`Map<Item, List<Item>> itemsByType = itemsList.stream().collect(groupingBy(Item::getItemType));`

**Grouping by multiple fields:** 

In some cases, we need to group by multiple fields, here’s how to do that:

`Map<String, Map<Item, List>> map = itemsList.stream().collect(groupingBy(Item::getName, groupingBy(Item::getItemType)));`

**Getting count of grouped items:**

`Map<Item, Long> itemsByType = itemsList.stream().collect(groupingBy(Item::getItemType, Collectors.counting()));`