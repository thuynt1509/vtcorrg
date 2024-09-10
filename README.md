# Docker

```bash
docker build . -t webbase -f docker/beta/Dockerfile

docker-compose up
```

var mn = mọi người ^^

# 1.Bên cắt html

## Chú ý

- Sửa trường NEXT_PUBLIC_MODE trong env thành 'html' để có thể build dạng export out

## Hướng dẫn

- ví dụ trong component Template
- Để khai báo 1 backgound, mn hãy đặt tên bg-Tên (ví dụ: className={`relative lg:p-10 p-4 bg-background-demo bg-contain w-[640px] bg-no-repeat bg-center lg:h-[410px]`})
  trong file tailwind.config.ts khai báo như ví dụ: "background-demo": renderUrlImage("/assets/images/bg_vuqy_demo.png"),
- vị trí để ảnh luôn là public/assets/images
- Để bật popup, mn copy phần khai báo này, import các module cần thiết (phần import vscode sẽ tự gợi ý, ko cần cop cũng được)

import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
const dispatch = useAppDispatch();
const { updateModalState } = appSlice.actions;

Mở popup:
dispatch(updateModalState(<MessageTemplate message="Demo mở popup" />));
Đóng popup
dispatch(updateModalState(null));

- popup có thể mở và đóng tại bất kì page hay component nào cũng được
- css tại globals.css nếu muốn css chung cho toàn project, nếu muốn style riêng cho page thì mn tạo 1 file style.module.css cùng cấp với page, file này sẽ chỉ áp dụng css cho page,
  sẽ ko sợ bị đặt trùng tên,
- hạn chế dùng jquery, chỉ sử dụng trong trường hợp ko còn cách nào khác
- khi bắt đầu dựng html hãy xóa component Template, comnponent này chỉ làm ví dụ để tham khảo

# 2.Bên dev

## Chú ý:

- Sửa trường NEXT_PUBLIC_MODE trong env thành 'web' để có thể build dạng standalone
- Khi dev thì cần bật requireAuth trong file /app/layout.tsx lên.

## Hướng dẫn:

Các hook có sẵn
-Chuyển title thành slug (toSlug)
-Gọi hàm share Fb (onShareFb)
-Paging: truyền css được cắt vào props, type1 là phân trang có 3 chấm, type2 là phân trang ko có dấu 3 chấm
-loading progres bar
-các hàm gọi số dư, đăng nhập, khi muốn gọi lại số dư thay đổi state refresh của redux
