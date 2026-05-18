import "./FiltersBar.css";

import * as Select from "@radix-ui/react-select";

import {
  ChevronDown,
  Check,
  Funnel,
  Star,
  ArrowUpDown,
  ChevronUp,
} from "lucide-react";

interface Props {
  category: string;
  rating: number;
  sortOrder: string;
  categories: string[];

  onCategoryChange: (value: string) => void;
  onRatingChange: (value: number) => void;
  onSortChange: (value: string) => void;
}

function FiltersBar({
  category,
  rating,
  sortOrder,
  categories,
  onCategoryChange,
  onRatingChange,
  onSortChange,
}: Props) {
  return (
    <div className="filters-bar">
      <CustomSelect
        icon={<Funnel size={18} />}
        placeholder="All Categories"
        value={category || "all"}
        onValueChange={(value) =>
          onCategoryChange(value === "all" ? "" : value)
        }
        items={[
          {
            label: "All Categories",
            value: "all",
          },

          ...categories.map((category) => ({
            label: formatCategory(category),
            value: category,
          })),
        ]}
      />

      <CustomSelect
        icon={<Star size={18} />}
        placeholder="All Ratings"
        value={rating === 0 ? "all-ratings" : String(rating)}
        onValueChange={(value) =>
          onRatingChange(value === "all-ratings" ? 0 : Number(value))
        }
        items={[
          {
            label: "All Ratings",
            value: "all-ratings",
          },

          {
            label: "4+ Rating",
            value: "4",
          },

          {
            label: "3+ Rating",
            value: "3",
          },
        ]}
      />

      <CustomSelect
        icon={<ArrowUpDown size={18} />}
        placeholder="Sort By Price"
        value={sortOrder || "default-sort"}
        onValueChange={(value) =>
          onSortChange(value === "default-sort" ? "" : value)
        }
        items={[
          {
            label: "Sort By Price",
            value: "default-sort",
          },

          {
            label: "Price: Low To High",
            value: "asc",
          },

          {
            label: "Price: High To Low",
            value: "desc",
          },
        ]}
      />
    </div>
  );
}

interface SelectProps {
  value: string;
  placeholder: string;

  icon: React.ReactNode;

  items: {
    label: string;
    value: string;
  }[];

  onValueChange: (value: string) => void;
}

function CustomSelect({
  value,
  placeholder,
  icon,
  items,
  onValueChange,
}: SelectProps) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="select-trigger">
        <div className="select-left">
          {icon}

          <Select.Value placeholder={placeholder} />
        </div>

        <Select.Icon>
          <ChevronDown size={18} className="select-chevron" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="select-content"
          position="popper"
          sideOffset={8}
        >
          <Select.ScrollUpButton className="scroll-button">
            <ChevronUp size={16} />
          </Select.ScrollUpButton>
          <Select.Viewport className="select-viewport">
            {items.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                className="select-item"
              >
                <Select.ItemText>{item.label}</Select.ItemText>

                <Select.ItemIndicator>
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="scroll-button">
            <ChevronDown size={16} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const formatCategory = (category: string) => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default FiltersBar;
