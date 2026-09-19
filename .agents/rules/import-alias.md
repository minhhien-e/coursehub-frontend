# Nguyên Tắc Sử Dụng Import Alias (Tuyệt đối không dùng relative path)

Khi import các module, component, hoặc utility bên trong dự án, **BẮT BUỘC** phải sử dụng Alias `@/` (đại diện cho thư mục `src/`) thay vì dùng đường dẫn tương đối (relative paths như `../`, `../../`).

**ĐÚNG (Sử dụng Alias):**
```typescript
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { UserProfile } from "@/types";
```

**SAI (Không sử dụng Alias):**
```typescript
import { Button } from "../../../components/ui/Button";
import { cn } from "../../utils/cn";
```

**Lý do:** Giúp code sạch, dễ đọc hơn, dễ dàng refactor và di chuyển vị trí file mà không phải tính toán lại cấp độ của thư mục cha.
