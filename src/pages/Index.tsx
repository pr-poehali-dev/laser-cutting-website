import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Scissors',
      title: 'Лазерная резка',
      description: 'Высокоточная резка металла толщиной до 20мм. Любые формы и размеры.',
      features: ['Сталь', 'Нержавейка', 'Алюминий']
    },
    {
      icon: 'Boxes',
      title: 'Гибка металла',
      description: 'Гибка листового металла на современном оборудовании с точностью до градуса.',
      features: ['До 3м длина', 'До 6мм толщина', 'Любые углы']
    },
    {
      icon: 'Sparkles',
      title: 'Сварочные работы',
      description: 'Профессиональная сварка конструкций любой сложности.',
      features: ['TIG', 'MIG/MAG', 'Электродуговая']
    },
    {
      icon: 'Palette',
      title: 'Порошковая покраска',
      description: 'Долговечное защитно-декоративное покрытие. Широкая палитра цветов.',
      features: ['RAL палитра', 'Антикоррозия', 'Гарантия 5 лет']
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/10460647-b172-4a23-88d6-8edcb8de6a5f/files/84f889c6-f1bf-496b-982d-5ce07fec2924.jpg',
      title: 'Декоративные панели',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/projects/10460647-b172-4a23-88d6-8edcb8de6a5f/files/eb1eeb72-6099-4aca-a4e5-480ef66ccfe9.jpg',
      title: 'Промышленные детали',
      category: 'Производство'
    },
    {
      image: 'https://cdn.poehali.dev/projects/10460647-b172-4a23-88d6-8edcb8de6a5f/files/30c9ab2e-6930-43f0-bc99-241d083f7df3.jpg',
      title: 'Металлоконструкции',
      category: 'Строительство'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-2xl font-bold">LASER CUT</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Заказать расчёт
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                ЛАЗЕРНАЯ РЕЗКА
                <span className="block text-primary">МЕТАЛЛА</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Высокоточная обработка металла на современном оборудовании. 
                От эскиза до готового изделия за 24 часа.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Получить расчёт
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24ч</div>
                  <div className="text-sm text-muted-foreground">Срок работы</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-primary/20 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/10460647-b172-4a23-88d6-8edcb8de6a5f/files/30c9ab2e-6930-43f0-bc99-241d083f7df3.jpg"
                alt="Лазерная резка металла"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover border border-primary/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">НАШИ УСЛУГИ</h2>
            <p className="text-xl text-muted-foreground">Полный цикл обработки металла</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" className="text-primary" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ПОРТФОЛИО</h2>
            <p className="text-xl text-muted-foreground">Примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="text-sm text-primary mb-2">{item.category}</div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ЗАКАЗАТЬ РАСЧЁТ</h2>
            <p className="text-xl text-muted-foreground">Получите бесплатный расчёт стоимости за 30 минут</p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Описание задачи</label>
                  <Textarea 
                    placeholder="Опишите, что нужно изготовить..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={24} />
                <span className="text-xl font-bold">LASER CUT</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная лазерная резка металла с 2015 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Лазерная резка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гибка металла</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сварка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Покраска</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@lasercut.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Промышленная, 15
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 LASER CUT. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
