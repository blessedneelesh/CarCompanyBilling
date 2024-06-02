
using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Doa;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<CarCompanyBillingContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
    sqlServerOptionsAction: sqlOptions => // by neelesh transient failure because of no db.
    {
        sqlOptions.EnableRetryOnFailure();
    }));


builder.Services.AddScoped<SalesInvoiceDoa>();
builder.Services.AddScoped<EmployeeDoa>();
builder.Services.AddScoped<CustomerDoa>();
builder.Services.AddScoped<CarDoa>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthorization();

app.UseCors(builder => builder
       .AllowAnyHeader()
       .AllowAnyMethod()
       .AllowAnyOrigin()
    );

app.MapControllers();

app.Run();
