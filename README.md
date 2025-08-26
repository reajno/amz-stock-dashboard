# Amazon Stock Dashboard
This web app is used to visualise inventory health for packaging SKUs. It calculates key stock metrics such as days-on-hand (DOH) and weekend coverage to allow users to make informed ordering decisions.

## Description
The purpose of this app is to simplify the order forecasting process for non-inventory items. 

***All provided values are for demonstration purposes only. Count template download has been deactivated for privacy reasons.**

## Usage

### Demo
- Copy the count data below and paste in the textbox on the [home page](https://amz-stock-dashboard.vercel.app/).

```
COR95252	2
COR95253	1.5
COR95254	3
COR95255	4
COR95256	2
COR95257	1
COR95258	6
COR95259	2.5
COR95260	2
COR95261	1
```

- Upon submission, you will be redirected to the `/metrics` endpoint which will show metric cards for each matching item ID found within the database.

![Demo - metrics page screenshot](https://github.com/user-attachments/assets/075c591c-09f2-42ed-8425-6e24b52f53a2)

- Use the `-` and `+` buttons to simulate quantity changes and see updated metrics for each card. Press the red `reset` button to reset the quantity back to the initial submitted count.

![Demo - incremented card screenshot](https://github.com/user-attachments/assets/67acd66a-05f6-413b-8f16-8baa07d58ae3)

- The increment amount for each card will be used as the amount to order. For counts done on a **Thursday**, it's recommended to have a `Weekend Cover` value of **at least 3 days**. (i.e. Friday delivery should cover stock until Monday delivery).

- Once all `DOH` and `Weekend Cover` values are satisfactory, click the `green` button on the bottom right side to copy orders to clipboard. 

![Demo - Copy to clipboard button](https://github.com/user-attachments/assets/7eecdb95-259f-4b8b-b96f-068e0ef72a07)

- Paste order via email or Slack message to the designated Supply Chain Specialist.

#### Example order from clipboard:

```
COR95260 - 5
COR95256 - 5
COR95257 - 1
COR95253 - 3
COR95252 - 6
COR95259 - 2
```



## License

[MIT](https://choosealicense.com/licenses/mit/)
