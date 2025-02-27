
import { useState } from 'react';
import { FormField, FormSection } from '@/types/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface DynamicFormProps {
  sections: FormSection[];
  onSubmit: (data: Record<string, any>) => void;
  className?: string;
}

export default function DynamicForm({ sections, onSubmit, className }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleChange(field.id, e.target.value)}
            required={field.required}
            className="min-h-[80px] min-w-[200px]"
          />
        );
      case 'select':
        return (
          <Select
            value={formData[field.id] || ''}
            onValueChange={(value) => handleChange(field.id, value)}
          >
            <SelectTrigger className="min-w-[200px]">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleChange(field.id, e.target.value)}
            required={field.required}
            className="min-w-[200px]"
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-100 last:border-0">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              {section.description && (
                <p className="text-sm text-gray-500 mt-1">{section.description}</p>
              )}
            </div>
            <div className="overflow-x-auto">
              <div className="inline-flex gap-6 p-6 min-w-full">
                {section.fields.map((field) => (
                  <div key={field.id} className="space-y-2 flex-none">
                    <Label htmlFor={field.id} className="text-sm font-medium">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </Label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end px-6 py-4 bg-gray-50 rounded-b-xl">
        <Button type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          Submit
        </Button>
      </div>
    </form>
  );
}
