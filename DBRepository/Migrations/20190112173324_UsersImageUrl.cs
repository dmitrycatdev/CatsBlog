using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class UsersImageUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageBase64",
                table: "Users",
                newName: "ImageUrl");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Users",
                newName: "ImageBase64");
        }
    }
}
